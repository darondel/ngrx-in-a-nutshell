import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  svgLogos: string[] = ['github', 'github-black', 'ngrx', 'redux', 'vuex'];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    for (const svgLogo of this.svgLogos) {
      iconRegistry.addSvgIcon(svgLogo, this.getSVGLogoResourceUrl(svgLogo));
    }
  }

  private getSVGLogoResourceUrl(name: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/logos/' + name + '-icon.svg');
  }

}
