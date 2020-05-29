import axios from "axios";

export default axios.create({
  baseURL: "https://apiprod.fattlabs.com/",
  headers: {
    "Content-type": "application/json",
    Authorization:
      "Bearer" +
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXJjaGFudCI6IjZkMzI5Nzk3LWI2NGQtNDdkMS1hNDU3LTQ3OThlMmIzNjFiNSIsImdvZFVzZXIiOmZhbHNlLCJzdWIiOiIwYzliYzIwZC00NWEzLTRiNDktODQ3Ni0zZmNmMjk2Nzg1YjkiLCJpc3MiOiJodHRwOi8vYXBpZGVtby5mYXR0bGFicy5jb20vdGVhbS9hcGlrZXkiLCJpYXQiOjE1OTA2MTgwMDksImV4cCI6NDc0NDIxODAwOSwibmJmIjoxNTkwNjE4MDA5LCJqdGkiOiJ6YUZnMlVQVENTQ0o5WWw0IiwiYXNzdW1pbmciOmZhbHNlLCJicmFuZCI6ImZhdHRtZXJjaGFudCJ9.U7jG7jRs2ht-r6ESHYaBz6SYG6VxrcnUCiZ_h4u_4lQ",
    Accept: "application / json",
  },
});
