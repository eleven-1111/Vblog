package com.cyf.vblog.data;

import com.cyf.vblog.entity.Category;
import lombok.Data;

@Data
public class CategoryInfoResponse {
    private Long id;
    private Long userId;
    private String categoryName;
    private Integer count;

    public CategoryInfoResponse(Category category, Integer count){
        this.id = category.getId();
        this.userId = category.getUser().getId();
        this.categoryName = category.getCategoryName();
        this.count = count;
    }
}
