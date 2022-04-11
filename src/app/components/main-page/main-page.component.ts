import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetFilesService } from 'src/app/services/get-files.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private getFiles: GetFilesService) { }


  ngOnInit(): void {

  }
 
  getFile(id: number) {
    this.spinner.show();
    this.getFiles.getFile(id).subscribe((result) => {
            this.spinner.hide("getFiles");
    }, (error) => {
      
      if (error.status > 200) {
        this.spinner.hide();
        Swal.fire({
          title: 'File not found',
          text: 'Try again later',
          icon: 'error',
          allowOutsideClick: false,
          confirmButtonColor: '#008B8B'
        })
      } else {
        if (error.error.text === undefined) {
          this.spinner.hide();
          Swal.fire({
            title: 'Server is down',
            text: 'Try again later',
            icon: 'error',
            allowOutsideClick: false,
            confirmButtonColor: '#008B8B'
          })
        } else {
          window.open(error.url, "_self");
        }
      }
      this.spinner.hide();
    });

  }
}