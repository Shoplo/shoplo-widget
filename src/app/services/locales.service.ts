import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class LocalesService {
  public localData: any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {

    if ( this.getParameterByName('locale') === 'en') {
      this.localData = environment.widget_settings_en;
    } else {
      this.localData = environment.widget_settings_pl;
    }

    if ( this.getParameterByName('product') === 'store') {
      this.localData.product = 'Shoplo Store';
    }

    if ( this.getParameterByName('product') === 'multi') {
      this.localData.product = 'Shoplo Multichannel';
    }

    if ( this.getParameterByName('product') === 'shoplo') {
      this.localData.product = 'Shoplo';
    }

    if ( this.getParameterByName('product') === 'mobile' && this.getParameterByName('locale') === 'en') {
      this.localData.product = 'Mobile app';
    }

    if ( this.getParameterByName('product') === 'mobile' && this.getParameterByName('locale') === 'pl') {
      this.localData.product = 'Aplikacja Mobilna';
    }

    if ( this.getParameterByName('product') === 'chat' && this.getParameterByName('locale') === 'en') {
      this.localData.product = 'Shoplo Chat';
    }

    if ( this.getParameterByName('product') === 'chat' && this.getParameterByName('locale') === 'pl') {
      this.localData.product = 'Shoplo Czat';
    }

    this.localData.nonce = this.makeNonce();
  }

  private getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$?');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);

    if (!results) {return null; }

    if (!results[2]) {return ''; }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  private makeNonce () {
      let text = '',
          i;
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
  }
}