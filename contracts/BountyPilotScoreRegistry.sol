// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BountyPilotScoreRegistry {
    struct ScoreRecord {
        bytes32 opportunityId;
        uint256 score;
        string evidenceURI;
        bytes32 evidenceHash;
        address submitter;
        uint256 timestamp;
    }

    ScoreRecord[] private records;

    event ScoreRecorded(
        uint256 indexed recordId,
        bytes32 indexed opportunityId,
        uint256 score,
        string evidenceURI,
        bytes32 evidenceHash,
        address indexed submitter
    );

    event AgentAuditRecorded(
        uint256 indexed recordId,
        bytes32 indexed opportunityId,
        uint256 readinessScore,
        string evidenceURI,
        bytes32 evidenceHash,
        address indexed submitter
    );

    function recordScore(
        bytes32 opportunityId,
        uint256 score,
        string calldata evidenceURI,
        bytes32 evidenceHash
    ) external returns (uint256 recordId) {
        recordId = _record(opportunityId, score, evidenceURI, evidenceHash);

        emit ScoreRecorded(recordId, opportunityId, score, evidenceURI, evidenceHash, msg.sender);
    }

    function recordAgentAudit(
        bytes32 opportunityId,
        uint256 readinessScore,
        string calldata evidenceURI,
        bytes32 evidenceHash
    ) external returns (uint256 recordId) {
        recordId = _record(opportunityId, readinessScore, evidenceURI, evidenceHash);

        emit AgentAuditRecorded(recordId, opportunityId, readinessScore, evidenceURI, evidenceHash, msg.sender);
    }

    function _record(
        bytes32 opportunityId,
        uint256 score,
        string calldata evidenceURI,
        bytes32 evidenceHash
    ) private returns (uint256 recordId) {
        recordId = records.length;
        records.push(
            ScoreRecord({
                opportunityId: opportunityId,
                score: score,
                evidenceURI: evidenceURI,
                evidenceHash: evidenceHash,
                submitter: msg.sender,
                timestamp: block.timestamp
            })
        );
    }

    function recordCount() external view returns (uint256) {
        return records.length;
    }

    function getRecord(uint256 recordId) external view returns (ScoreRecord memory) {
        return records[recordId];
    }
}
