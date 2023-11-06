package com.pews.brightdreamsfoundation.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.pews.brightdreamsfoundation.beans.HttpResponseEntity;
import com.pews.brightdreamsfoundation.beans.PointHistory;
import com.pews.brightdreamsfoundation.service.PointHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("pointHistory")
public class PointHistoryController {
    @Autowired
    private PointHistoryService pointHistoryService;

    @GetMapping("{id}")
    public HttpResponseEntity getHistoryById(@PathVariable("id") int id) {
        LambdaQueryWrapper<PointHistory> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(PointHistory::getUserId, id);
        List<PointHistory> histories = pointHistoryService.list(wrapper);

        return new HttpResponseEntity(200, histories, "查询成功!");
    }

    @PostMapping("{id}")
    public HttpResponseEntity addHistory(@RequestBody PointHistory pointHistory) {
        pointHistory.setChangeDate(LocalDateTime.now());
        boolean flag = pointHistoryService.save(pointHistory);
        if (flag) {
            return new HttpResponseEntity(200, null, "添加成功!");
        } else {
            return new HttpResponseEntity(404, null, "添加失败!");
        }
    }

}
