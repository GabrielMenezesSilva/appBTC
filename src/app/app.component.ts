import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiceService } from './services/bitcoin.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
implements OnInit {
res: any;
  async ngOnInit() {
   this.res = await this.result
  //  console.log("Prix " +this.res);
   
  }
  title = 'appBitcoin2.0';

  isHidden: boolean = false

  result = inject (ServiceService).prixBTC()

async  prixBTC() {
  this.isHidden =! this.isHidden
    this.res = await this.result
  }



}
