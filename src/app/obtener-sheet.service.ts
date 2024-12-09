import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class ObtenerSheetService {
  API_KEY = 'AIzaSyAIwkB9yZMOv4GzzzQDO4PbvnQYRX4e2Kk';
  DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

  private gapiInitialized = false;
  private gapiLoadPromise!: Promise<void>;

  constructor() {
    this.gapiLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = () => {
        gapi.load('client', async () => {
          try {
            await gapi.client.init({
              apiKey: this.API_KEY,
              discoveryDocs: [this.DISCOVERY_DOC],
            });
            this.gapiInitialized = true;
            resolve();
          } catch (error) {
            console.error('Error initializing GAPI client:', error);
            reject(error);
          }
        });
      };
      script.onerror = () => {
        console.error('Error loading GAPI script');
        reject(new Error('Error loading GAPI script'));
      };
      document.body.appendChild(script);
    });
  }

  async listMajors(sheetId: string,rango: string): Promise<Asesor[]> {
    if (!this.gapiInitialized) {
      await this.gapiLoadPromise;
    }

    try {
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: rango,
      });

      const range = response.result;
      const asesores: Asesor[] = [];

      if (range && range.values && range.values.length > 0) {
        for (const row of range.values) {
          if (!row[0]) break;

          const asesor = new Asesor(
            row[0],
            row[1] || '0',
            Number(row[2]) || 0,
            Number(row[3]) || 0,
            Number(row[4]) || 0,
            Number(row[5]) || 0
          );
          asesores.push(asesor);
        }
      }
      return asesores;
    } catch (err) {
      console.error('Error fetching data:', err);
      return [];
    }
  }
}

class Asesor {
  constructor(
    public nombre: string,
    public cxh: string,
    public casosCerrados: number,
    public descartados: number,
    public transferidos: number,
    public TMO: number
  ) {}
}
