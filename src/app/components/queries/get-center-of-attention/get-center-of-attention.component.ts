import { Component, OnInit } from '@angular/core';
import { CenterOfAttentionService } from '../../../services/center-of-attention.service';

@Component({
  selector: 'app-get-center-of-attention',
  templateUrl: './get-center-of-attention.component.html'
})
export class GetCenterOfAttentionComponent implements OnInit {

  centerOfAttentions: any[] = [];

  constructor(private _centerOfAttentionService: CenterOfAttentionService) {
    this._centerOfAttentionService.getAllCenterOfAttention().subscribe((data: any) => {
      console.log(data);
      this.centerOfAttentions = data.response;
    });
  }

  ngOnInit(): void { }
}
