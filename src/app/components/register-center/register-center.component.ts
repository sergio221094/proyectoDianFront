import { Component, OnInit } from '@angular/core';
import { CenterOfAttentionService } from '../../services/center-of-attention.service';

@Component({
  selector: 'app-register-center',
  templateUrl: './register-center.component.html'
})
export class RegisterCenterComponent implements OnInit {

  centerOfAttention;

  constructor(private _centerOfAttentionService: CenterOfAttentionService) {
    this.centerOfAttention = {
      nombre: '',
      direccion: ''
    };

  }

  ngOnInit(): void {
  }

  onSubmitCenter() {
    this._centerOfAttentionService.saveCenterOfAttention(JSON.stringify(this.centerOfAttention)).subscribe((data: any) => {
      console.log(data);
      alert("Centro de atención guardado con éxito");
      location.reload();
    });

  }

}
