<?php
include "./connection.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
  
    $user_id = $data['user_id'];
    $experiences = $data['experiences'];
    $educations = $data['educations'];
    $skills = $data['skills'];

    foreach ($experiences as $experience) {
        $company = $experience['company'];
        $position = $experience['position'];
        $start_date = $experience['start_date'];
        $end_date = $experience['end_date'];
        $description = $experience['description'];

        $query = "INSERT INTO experiences (user_id, company, position, start_date, end_date, description) 
                  VALUES ('$user_id', '$company', '$position', '$start_date', '$end_date', '$description')";
        $conn->query($query);
    }

    foreach ($educations as $education) {
        $institution = $education['institution'];
        $degree = $education['degree'];
        $major = isset($education['major']) ? $education['major'] : '';
        $start_year = isset($education['start_year']) ? $education['start_year'] : null;
        $end_year = isset($education['end_year']) ? $education['end_year'] : null;

        $query = "INSERT INTO education (user_id, institution, degree, major, start_year, end_year) 
                  VALUES ('$user_id', '$institution', '$degree', '$major', '$start_year', '$end_year')";
        $conn->query($query);
    }

    foreach ($skills as $skill) {
        $check_query = "SELECT * FROM skills WHERE skill_name = '$skill'";
        $result = $conn->query($check_query);

        if ($result->num_rows == 0) {
            $insert_query = "INSERT INTO skills (skill_name) VALUES ('$skill')";
            $conn->query($insert_query);
        }

        $get_skill_id_query = "SELECT skill_id FROM skills WHERE skill_name = '$skill'";
        $result = $conn->query($get_skill_id_query);
        $row = $result->fetch_assoc();
        $skill_id = $row['skill_id'];

        $insert_user_skill_query = "INSERT INTO user_skills (user_id, skill_id) VALUES ('$user_id', '$skill_id')";
        $conn->query($insert_user_skill_query);
    }

    echo "Data inserted successfully!";
} else {
    echo "Invalid request method. Please use POST method to submit data.";
}