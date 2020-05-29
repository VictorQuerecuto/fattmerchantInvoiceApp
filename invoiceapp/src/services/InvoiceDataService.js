import http from "../http-common";

class InvoiceDataService {
  create(data) {
    return http.post("/invoice");
  }
}

export default new InvoiceDataService();
