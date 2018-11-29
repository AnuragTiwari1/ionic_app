import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CommonService{
  baseUrl: string;
  private response: Observable<Response>;
  public constructor(private http: HttpClient) {
    this.baseUrl="http://localhost:8801";  //local
    //this.baseUrl="http://52.66.87.134:8801";    //server
  }

  login(data) {
    console.log("logging in with data",data);
    return new Promise(resolve => {
      this.http.post(this.baseUrl + "/api/login",data).subscribe(response => {
        console.log("response from server>>>>>>>>>>>",response);
        resolve(response);
      }, err => {
        console.log(err);
      });
    });
  }
}

