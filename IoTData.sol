// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IoTData {

    // Struct for Sensor Data
    struct SensorData {
        uint256 timestamp;
        string sensorId;
        string sensorName;
        string location;
        string value;
    }

    // Arrays to store sensor data
    SensorData[] private sensorDataArray;

    // Events for adding data
    event DataAdded(uint256 timestamp, string sensorId, string sensorName, string location, string value);

    // Function to add sensor data
    function addData(string memory sensorId, string memory sensorName, string memory location, string memory value) public {
        sensorDataArray.push(SensorData(block.timestamp, sensorId, sensorName, location, value));
        emit DataAdded(block.timestamp, sensorId, sensorName, location, value);
    }

    // Function to retrieve sensor data by index
    function getSensorData(uint256 index) public view returns (uint256, string memory, string memory, string memory, string memory) {
        require(index < sensorDataArray.length, "Index out of range");
        SensorData memory data = sensorDataArray[index];
        return (data.timestamp, data.sensorId, data.sensorName, data.location, data.value);
    }

    // Function to retrieve all sensor data (optional)
    function getAllSensorData() public view returns (SensorData[] memory) {
        return sensorDataArray;
    }
}
