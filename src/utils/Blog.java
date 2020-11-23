package utils;

import java.util.Date;

/**
 * @Author: 杰哥
 * Date: 2020/11/20 9:40
 * @Description:
 **/
public class Blog {
    private Integer id;
    private String userId;
    private String content;
    private String filePaht;
    private Date createTime;

    public Blog() {
    }

    public Blog(Integer id, String userId, String content, String filePaht, Date createTime) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.filePaht = filePaht;
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", userId='" + userId + '\'' +
                ", content='" + content + '\'' +
                ", filePaht='" + filePaht + '\'' +
                ", createTime=" + createTime +
                '}';
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFilePaht() {
        return filePaht;
    }

    public void setFilePaht(String filePaht) {
        this.filePaht = filePaht;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}
