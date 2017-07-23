package com.demo.web.filter;

import org.apache.log4j.Logger;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class SessionFilter implements Filter {
    protected static final Logger log = Logger.getLogger(SessionFilter.class);
    public static final String LOGIN_ID = "LOGIN_ID";

    public static final String LOGIN_NAME = "LOGIN_NAME";

    public static final String LOGIN_DEPARTMENT = "LOGIN_DEPARTMENT";

    public static final String LOGIN_URL = "/mdd/index";

    public static List<String> excludeUrls = new ArrayList<String>();

    static {
        excludeUrls.add("/mdd/index");
        excludeUrls.add("/stu/index");
        excludeUrls.add("/stu/valid");

        excludeUrls.add("/stu/confirm2");
        excludeUrls.add("/WEB-INF/pages/mdd/index.jsp");
        excludeUrls.add("/mdd/valid");
    }

    public static void setLoginUserId(HttpServletRequest req, String login_id) {
        HttpSession session = req.getSession();
        session.setAttribute(LOGIN_ID, login_id);
    }

    public static String getLoginUserId(HttpServletRequest req) {
        HttpSession session = req.getSession();
        return (String) session.getAttribute(LOGIN_ID);
    }
    public static void setLoginUserName(HttpServletRequest req, String login_name) {
        HttpSession session = req.getSession();
        session.setAttribute(LOGIN_NAME, login_name);
    }

    public static String getLoginUserName(HttpServletRequest req) {
        HttpSession session = req.getSession();
        return (String) session.getAttribute(LOGIN_NAME);
    }
    public static void setDepartment(HttpServletRequest req, String department) {
        HttpSession session = req.getSession();
        session.setAttribute(LOGIN_DEPARTMENT, department);
    }

    public static String getDepartment(HttpServletRequest req) {
        HttpSession session = req.getSession();
        return (String) session.getAttribute(LOGIN_DEPARTMENT);
    }
    @Override
    public void destroy() {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession();
        String url = req.getServletPath();

        // 一下代码的效果，如果url为/mdd/confrim 前者为true，那么就会转回首页，
        //如果为/mdd/index 则会验证后一个判断条件，如果之前已经登录了，那么后面肯定为false。会继续被其他的过滤器过滤。
        //否则继续执行，返回首页的操作，其他的过滤也会结束。
        if (!excludeUrls.contains(url) && session.getAttribute(LOGIN_ID) == null) {
            request.getRequestDispatcher(LOGIN_URL).forward(request, response);
        } else {
            chain.doFilter(request, response);
        }
    }

    @Override
    public void init(FilterConfig arg0) throws ServletException {
    }

}
