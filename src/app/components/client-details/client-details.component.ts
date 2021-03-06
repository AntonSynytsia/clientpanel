import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private readonly clientService: ClientService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    // get id from url
    this.id = this.route.snapshot.params['id'];
    // get client (returns observable so that we can subscribe)
    this.clientService.getClient(this.id).subscribe(client => {
      if (client !== null) {
        if (client.balance > 0) {
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated', {
      cssClass: 'alert-success',
      timeout: 4000
    });
  }
}
