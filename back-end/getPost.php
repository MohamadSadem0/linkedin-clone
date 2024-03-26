<?php
include "./connection.php";

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        $response = getFeed();
        echo json_encode($response);
        break;

    default:
        echo json_encode(["status" => "Invalid request method"]);
        break;
}

function getFeed()
{
    global $conn;
    $query = $conn->prepare("SELECT posts.*, users.name as user_name FROM posts JOIN users ON posts.user_id = users.user_id ORDER BY posts.timestamp DESC");
    $query->execute();
    $result = $query->get_result();

    $feed = [];
    while ($row = $result->fetch_assoc()) {
        $post_id = $row['post_id'];
        $likes_query = $conn->prepare("SELECT COUNT(*) as likes_count FROM post_likes WHERE post_id = ?");
        $likes_query->bind_param("i", $post_id);
        $likes_query->execute();
        $likes_result = $likes_query->get_result();
        $likes_row = $likes_result->fetch_assoc();
        $likes_count = $likes_row['likes_count'];

        $comments_query = $conn->prepare("SELECT * FROM comments WHERE post_id = ?");
        $comments_query->bind_param("i", $post_id);
        $comments_query->execute();
        $comments_result = $comments_query->get_result();
        $comments = [];
        while ($comment_row = $comments_result->fetch_assoc()) {
            $comments[] = $comment_row;
        }

        $row['likes_count'] = $likes_count;
        $row['comments'] = $comments;
        $feed[] = $row;
    }

    return ["status" => "Success", "feed" => $feed];
}
?>