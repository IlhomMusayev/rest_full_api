CREATE DATABASE rest_api;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    user_profil VARCHAR(255) DEFAULT 'nophoto.png'
);


INSERT INTO users (user_name, user_email, user_password, user_profil) VALUES ($1, $2, $3, $4) RETURNING * ("Ilhomjon", "ilhomjon@gmail.com", "password")

CREATE TABLE user_sessions(
    session_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_user_agent VARCHAR(56) NOT NULL,
    user_id UUID NOT NULL REFERENCES users(user_id)
);


-- ADS DATABESE

CREATE TABLE ads(
    ads_id SERIAL PRIMARY KEY,
    ads_name VARCHAR(255) NOT NULL,
    ads_about TEXT NOT NULL,
    ads_img VARCHAR(255) DEFAULT 'nophoto.png',
    author_id VARCHAR(255) NOT NULL REFERENCES users(user_id),
);