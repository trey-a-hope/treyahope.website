module App.Services {
    export class MyFirebaseRef {
        private config: any = ({
            apiKey: "AIzaSyAMonlIeAmbE_E2k0yoxCnfksuwqaAIeG0",
            authDomain: "treyahope-5bd81.firebaseapp.com",
            databaseURL: "https://treyahope-5bd81.firebaseio.com",
            projectId: "treyahope-5bd81",
            storageBucket: "treyahope-5bd81.appspot.com"
        });
        private firebase: any;       
        private databaseRef: Firebase;
        public homeDatabaseRef: Firebase;
        public aboutDatabaseRef: Firebase;
        public skillsDatabaseRef: Firebase;
        public graphicDesignDatabaseRef: Firebase;
        public portfolioDatabaseRef: Firebase;
        public projectsDatabaseRef: Firebase;
        public contactDatabaseRef: Firebase;
        public storageRef: any;

        constructor() {
            firebase.apps.length === 0 ? this.firebase = firebase.initializeApp(this.config) : this.firebase = firebase.apps[0];
            this.databaseRef = this.firebase.database().ref();
            this.homeDatabaseRef = this.databaseRef.child('Home');
            this.aboutDatabaseRef = this.databaseRef.child('About');
            this.skillsDatabaseRef = this.databaseRef.child('Skills');
            this.graphicDesignDatabaseRef = this.databaseRef.child('GraphicDesign');
            this.portfolioDatabaseRef = this.databaseRef.child('Portfolio');
            this.contactDatabaseRef = this.databaseRef.child('Contact');
            this.storageRef = this.firebase.storage().ref();   
         }
    }

    angular.module('treyahope').service('MyFirebaseRef', MyFirebaseRef);
}