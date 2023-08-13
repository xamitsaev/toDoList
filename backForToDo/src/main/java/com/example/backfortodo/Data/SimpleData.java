package com.example.backfortodo.Data;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.NoSuchElementException;

@Component
public class SimpleData {

    private HashMap<Integer, String> data;

    private int counter;

    public SimpleData() {
        data = new HashMap<>();
        addItem("Success");
        counter = -1;
    }

    public int addItem(String item) {
        counter++;
        data.put(counter, item);
        return counter;
    }

    public String updateItem(int id, String item) throws NoSuchElementException {
        if (data.containsKey(id)) return data.put(id, item);
        else throw new NoSuchElementException();
    }

    public String deleteItem(int id, String item) throws NoSuchElementException{
        if(data.containsKey(id) /*&& data.get(id) == item*/) return data.remove(id);
        else throw new NoSuchElementException();
    }

    public String getData() throws Exception{//В данном месте вручную конвертируем в JSON с помощью библиотеки Jackson
        /*ObjectMapper mapper = new ObjectMapper();*/
        JSONObject jsonObject = new JSONObject(data);
        /*JSONArray array=new JSONArray("["+jsonObject.toString()+"]");*/
        return jsonObject.toString();
    }

}
