export class ResponseEntity {
  static builder() {
    return new ResponseBuilder();
  }
}

class ResponseBuilder {
  private data: any;
  private message: string = 'success';

  setData(data: any) {
    this.data = data;
    return this;
  }

  setMsg(message: string) {
    this.message = message;
    return this;
  }

  build() {
    return {
      message: this.message,
      ...(this.data && { data: this.data }),
    };
  }
}
