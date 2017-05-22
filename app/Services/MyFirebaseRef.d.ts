declare module App.Services {
    class MyFirebaseRef {
        private config;
        private firebase;
        private databaseRef;
        homeDatabaseRef: Firebase;
        aboutDatabaseRef: Firebase;
        skillsDatabaseRef: Firebase;
        graphicDesignDatabaseRef: Firebase;
        portfolioDatabaseRef: Firebase;
        projectsDatabaseRef: Firebase;
        contactDatabaseRef: Firebase;
        storageRef: any;
        constructor();
    }
}
