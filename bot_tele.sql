create database Bot_telegram;

use Bot_Telegram;

create table tbbotresponse(
id int auto_increment primary key ,
update_id char not null unique key,
comando varchar(100) not null,
resposta varchar(100) not null,
data_resposta timestamp not null default current_timestamp
);