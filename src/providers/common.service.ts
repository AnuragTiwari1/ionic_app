import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CommonService{
  baseUrl: string;
  public constructor(private http: HttpClient) {
    this.baseUrl="http://localhost:8801";  //local
    //this.baseUrl="http://52.66.87.134:8801";    //server
  }

  login(data) {
    return new Promise(resolve => {
      this.http.post(this.baseUrl + "/api/login",data).subscribe(response => {
        resolve(response);
      }, err => {
        console.log(err);
      });
    });
  }
}

