package com.example.backfortodo.Controllers;

import com.example.backfortodo.Data.SimpleData;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/" )
@RequestMapping(value="data", consumes="*/*")
public class DataController {

    private SimpleData simpleData;

    @Autowired
    DataController(SimpleData simpleData) {
        this.simpleData = simpleData;
    }

    @GetMapping("")
    @ResponseBody()
    private ResponseEntity<String> getData() {
        String result;
        try {
            result = simpleData.getData();
            System.out.println(result.toString());
            return new ResponseEntity<>(result, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{itemId}")
    private ResponseEntity deleteData(@PathVariable(value="itemId") String itemId,
                                      @RequestBody String item) {
        try {
            simpleData.deleteItem(Integer.valueOf(itemId), item);
            return new ResponseEntity(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("")
    private ResponseEntity addItem(@RequestBody String item) {
        try {
            int id = simpleData.addItem(item);
            HashMap<Integer, String> result = new HashMap<Integer, String>();
            result.put(id, item);
            JSONObject jsonObject = new JSONObject(result);
            return new ResponseEntity(jsonObject.toString(), HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{itemId}")
    private ResponseEntity updateItem(@PathVariable(value="itemId") int itemId,
                            @RequestBody String item) {
        try {
            simpleData.updateItem(itemId, item);
            return new ResponseEntity(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
    }

}
