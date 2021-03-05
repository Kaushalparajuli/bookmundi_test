<?php

class Database
{
    protected $username, $servername, $password;

    public function __construct()
    {
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "";
        $this->connect();
    }

    public function connect()
    {
        $conn = new mysqli($this->servername, $this->username, $this->password);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        echo "Connected successfully";
    }

}