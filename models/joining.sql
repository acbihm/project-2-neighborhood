-- SELECT * FROM grass_is_greener_db.question;
USE grass_is_greener_db;
SELECT question.*,  answers.answer, answers.zip_code, answers.user_name
FROM grass_is_greener_db.question
LEFT JOIN answers ON question.id=answers.questionID;