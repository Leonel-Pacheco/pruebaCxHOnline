import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ObtenerSheetService } from '../obtener-sheet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-astudillo',
  imports: [CommonModule],
  templateUrl: './astudillo.component.html',
  styleUrl: './astudillo.component.css'
})
export class AstudilloComponent implements OnInit {

  asesores: Asesor[] = [];

  constructor(private obtenerAsesores: ObtenerSheetService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.obtenerAsesores.listMajors('1lEVmAYgTwZFNx2aSm3DKJdSdq9KocHamhf43ZoldAFU','PRODU!A5:F').then((data: Asesor[]) => {
      this.asesores = data;
    }).catch((error) => {
      console.error('Error al obtener asesores:', error);
    });
    
  }

}

class Asesor {
  constructor(
    public nombre: string,
    public cxh: string,
    public casosCerrados: number,
    public descartados: number,
    public transferidos: number,
    public TMO: number,
    public cxhClass?: string // Propiedad para almacenar la clase CSS
  ) { }
}