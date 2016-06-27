# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name       | string    | not null
description        | text      | not null
street_address | string    | not null
city        | string      | not null
state        | string      | not null
zip_code        | integer      | not null
media_url        | string      | not null
author_id   | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
project_id       | string    | not null, foreign key
body | string    |  not null

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
project_id     | string    | not null, foreign key (references projects), indexed

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
amount      | integer   | not null
user_id      | integer   | not null, foreign key (references users)
project_id    | integer   | not null, foreign key (references projects)


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
