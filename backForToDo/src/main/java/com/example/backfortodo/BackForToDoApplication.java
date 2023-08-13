package com.example.backfortodo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Первая задача - реализовать элементарный back для todo-листа
//При первоначальной загрузке отправляется запрос на сервер, запрашивающий список задач
//Этот запрос перехватывается контроллером и отправляет обратно данные
//данные загружаются на сайт

/*Детали: отправка в стиле rest. как производить отправку - в каком формате
* использовать асинхронное обновление страницы? следует помнить, что useEffect не вызывает обновление
*
* метод fetch в react + useEffect*/
@SpringBootApplication
public class BackForToDoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackForToDoApplication.class, args);
	}

}
