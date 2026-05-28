import { spawnSync } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SOLC_VERSION = "0.8.30";
const SOLC_RELEASE = "0.8.30+commit.73712a01";
const SOURCE_PATH = "contracts/BountyPilotScoreRegistry.sol";
const OUTPUT_DIR = "build/mantle";
const RAW_ARTIFACT_PREFIX = "contracts_BountyPilotScoreRegistry_sol_BountyPilotScoreRegistry";

export async function compileMantleContract() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const result = spawnSync(
    "npx",
    [
      "--yes",
      `solc@${SOLC_VERSION}`,
      "--optimize",
      "--optimize-runs",
      "200",
      "--bin",
      "--abi",
      "--output-dir",
      OUTPUT_DIR,
      SOURCE_PATH
    ],
    { encoding: "utf8" }
  );

  if (result.status !== 0) {
    throw new Error(
      [
        "Solidity compilation failed.",
        result.stdout.trim(),
        result.stderr.trim()
      ].filter(Boolean).join("\n")
    );
  }

  const rawAbiPath = path.join(OUTPUT_DIR, `${RAW_ARTIFACT_PREFIX}.abi`);
  const rawBinPath = path.join(OUTPUT_DIR, `${RAW_ARTIFACT_PREFIX}.bin`);
  const abi = JSON.parse(await readFile(rawAbiPath, "utf8"));
  const bytecodeHex = (await readFile(rawBinPath, "utf8")).trim();

  if (!bytecodeHex) {
    throw new Error("Compiler produced empty bytecode.");
  }

  const normalizedAbiPath = path.join(OUTPUT_DIR, "BountyPilotScoreRegistry.abi.json");
  const normalizedBytecodePath = path.join(OUTPUT_DIR, "BountyPilotScoreRegistry.bytecode.txt");

  await writeFile(normalizedAbiPath, `${JSON.stringify(abi, null, 2)}\n`);
  await writeFile(normalizedBytecodePath, `0x${bytecodeHex}\n`);

  return {
    compiler: `solc-js ${SOLC_RELEASE}`,
    optimizer: {
      enabled: true,
      runs: 200
    },
    sourcePath: SOURCE_PATH,
    outputDir: OUTPUT_DIR,
    abiPath: normalizedAbiPath,
    bytecodePath: normalizedBytecodePath,
    bytecodeBytes: bytecodeHex.length / 2,
    functions: abi
      .filter((entry) => entry.type === "function")
      .map((entry) => entry.name)
      .sort()
  };
}

if (fileURLToPath(import.meta.url) === process.argv[1]) {
  console.log(JSON.stringify(await compileMantleContract(), null, 2));
}
