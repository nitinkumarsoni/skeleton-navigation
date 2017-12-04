import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Home';
        config.map([
            {route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./welcome'), nav: true, title: 'Welcomes'},
            {route: 'search/:keyword', name: 'search', moduleId: PLATFORM.moduleName('./search'), nav: false, title: 'Search'},
            {route: 'weather/:woeid', name: 'woeidDetail', moduleId: PLATFORM.moduleName('./weather'), nav: false, },
            //      { route: 'weather',       name: 'weather', moduleId: PLATFORM.moduleName('.weather'), nav: true, title: 'weather' },
        ]);

        this.router = router;
    }

    doSearch(query) {
        console.log(query)
        console.log(this.getRoute());
        this.rewdirectToSearch(query);
    }

    getRoute() {
        return this.router.currentInstruction.config.name;
    }
    
    rewdirectToSearch(query) {
        this.router.navigateToRoute('search',{keyword : query});
    }
}
