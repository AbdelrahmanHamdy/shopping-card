import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';

import { AuthService } from '../../auth/auth.service';
import { HttpEvent } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService:DataStorageService,
    private authService:AuthService){}

    authCheck(){
      return this.authService.isAuthenticated();
    }
    onLogout(){
      this.authService.logout();
    }
  onSaveData(){
    this.dataStorageService.storeRecipes()
    .subscribe((response:HttpEvent<Object>)=>{
      console.log(response);
    }); 
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }
}
