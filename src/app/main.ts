import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InfoProvider } from '../providers/info/info';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
