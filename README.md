
## Inhoudsopgaven  
1. [Inleiding](#inleiding)  
2. [Voorbereiding](#voorbereiding)  
3. [Installatie](#installatie)  
4. [Gebruik](#gebruik)
5. [Onderhoud](#onderhoud)
  
## [Inleiding](#)
Dit is een handleiding om het sensorsysteem voor Urban Reef te kunnen installeren.    
In deze handleiding wordt behandeld wat er nodig is voor het project, hoe deze geïnstalleerd   
wordt en hoe deze gebruikt moet worden.  
  
## [Voorbereiding](#)  
Om het project te kunnen installeren is het volgende nodig:    
1. (Macos & Windows)[Docker Desktop](https://www.docker.com/get-started/)  
2. (Linux) [Docker Installation Ubuntu](https://docs.docker.com/engine/install/ubuntu/)  
3. (Linux) [Docker Compose](https://docs.docker.com/compose/install/linux/#install-using-the-repository)  
4. De website en Backend/API. download deze via [Github](https://github.com/FrostyDog132/Project5-6UrbanReef)  
5. Installeer [Angular](https://angular.io/tutorial/first-app)  
6. Download en installeer [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)  
7. (Voor debugging) Download en installeer [MuEditor](https://codewith.mu/en/download) 
  
## [Installatie](#) 
### Installeren Backend/API    
De volgende stappen beschrijven de installatie procedure van de backend/api.    
#### Docker Compose    
1. Open de folder genaamd "Urbanreef-Backend".  
2. Open een terminal in deze folder.  
3. Voer in: ``docker compose up -d --build``. Dit gaat 4 "images" downloaden van Docker. Deze start hij dan ook meteen 
<div style="page-break-after: always"></div>

#### MySQL    
1. Open MySQL Workbench  
2. Druk bij connection op de +  
3. Vul bij **connection name** een naam in die je kan onthouden  
4. Bij port: 8306  
5. Bij de hostname het IP van je server  
6. Bij username **urban-admin**  
7. Bij password **welcome12345**  
8. Klik op **Test Connection**  
9. Als alles goed is ingesteld, krijg je geen foutmelding. Als dat niet het geval is, herhaal de vorige stappen  
10. Klik op **Ok**  
11. Klik op de kaart met de aangemaakte connectie.  
12. Je ziet dan een pagina waar tekst in geschreven kan worden, vul de volgende code in:  
```SQL  
use db;   
create table reefs (  
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,    
    name varchar(50) NOT NULL,    
    location varchar(50) NOT NULL,    
    active tinyint NOT NULL);  
create table users (  
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,    
    email varchar(50) NOT NULL,    
    password varchar(50) NOT NULL,    
    role varchar(50) NOT NULL);  
```  
13. druk daarna op de knop met het bliksemschichtje  
<div style="page-break-after: always"></div>

#### InfluxDB Setup  
1. Ga naar: localhost:8086. Let op! Wanneer je dit draait op een server, moet je **localhost** veranderen naar **het ip van je server**.  
2. Maak een account aan.  
3. Ga naar **Load Data -> Buckets**  
4. Klik: **Create Bucket**  
5. Geef de Bucket een naam, bijv. *Reefs*.  
6. Geef aan of de bucket data moet verwijderen na een X tijd of niet.  
7. Ga nu naar **Load Data -> API Tokens**.  
8. Klik **Generate API Token**  
9. Kies dan **All Access API Token**  
10. Geef de API-Token een beschrijving die duidelijk is zodat je weet waarvoor deze gebruikt wordt.  
#### Grafana Setup  
1. Ga nu naar: localhost:8300. Let op! Wanneer je dit draait op een server, moet je **localhost** veranderen naar **het ip van je server**.  
2. Maak een account aan.  
3. Klik dan op: **Add your first data source**  
4. Kies dan **InfluxDB**  
5. Vul bij name een naam in die duidelijk maakt voor je waarvoor het is.  
6. Selecteer bij **Query Language** Flux  
7. vul bij url in: **http://influxdb:8086  
8. Bij Auth, toggle **Basic Auth** naar **aan**  
9. Bij user, vul in de gebruikers naam van je influxdb account.  
10. Bij password, vul in het wachtwoord van je influxdb account.  
11. Bij **InfluxDB Details** vul je bij Organization: Urban Reef  
12. Bij **Token** vul je de API-Token in die je hebt aangemaakt bij stap 13 van InfluxDB  
13. Bij **Default Bucket** vul je in de naam van je Bucket  
<div style="page-break-after: always"></div>

#### Grafana Dashboard Setup  
1. Druk links boven in op de 3 horizontale strepen en klik op **dashboard**  
2. Klik dan rechts boven in op **new** en kies **New Dashboard**  
3. Klik dan op **+ Add Visualization**  
4. Kies dan als datasource de influxdb datasource die je hebt aangemaakt bij vorige stappen  
5. Aan de onderkant, vul een flux query in die de data ophaalt op de door jou gekozen manier. Bijv.  
```  
   from(bucket: "Reefs")   
   |> range(start: -2h)    
   |> filter(fn: (r) => r["_measurement"] == "sensor_data" and r["_field"] == "temperature1" or r["_field"] == "temperature2")  
``` 
   Dit haalt de data op van temperatuur van 2 sensoren op van de laatste 2 uur.  
6. Voor de luchtvochtigheid:
```  
   from(bucket: "Reefs")   
   |> range(start: -2h)    
   |> filter(fn: (r) => r["_measurement"] == "sensor_data" and r["_field"] == "humidity1" or r["_field"] == "humidity2")  
``` 
7. Om te zien welke waardes er aanwezig zijn, kijk in de Reef bucket van InfluxDB. Voor de stappen kijk onder [Gebruik](#gebruik).
#### Grafana Dasboard Integratie Webapp  
1. Ga naar je aangemaakte dashboard.  
2. Je ziet dan een representatie van een grafiek, klik op de 3 bolletjes in de hoek rechts boven van de representatie die je wilt implementeren in de webapp  
3. Klik op **share**  
4. Klik dan boven in op **Embed**  
5. Kies of je de grafiek in light mode of dark mode wilt  
6. Kopieer het stukje code van de iframe.  
7. Ga naar de sourcecode van de webapp  
8. Ga dan naar het bestand **reef-detail.component.html**. Deze is te vinden in de folder */Project5-6UrbanReef/website/urbanReef-angular/urbanReef/src/app/dashboard/reefs/reef-detail*  
9. Vervang het iframe element door het zojuist gekopieerde iframe element.  
10. Sla het bestand op.  

#### Fysiek systeem
1. Plaats het statief over het Reef
2. Kies de posities op de ringen waar de sensoren komen
3. Monteer de sensoren aan de binnenkant van de ring met tape/tie-wraps
4. Sluiten de kabels aan op de multiplexer. De verbindingen zijn als volgt:
	1. Vin -> Rode lijn op het breadboard
	2. GND -> Blauwe lijn op het breadboard
	3. SDA -> SD(nummer)
	4. SCL -> SC(nummer)
	5. Let op: Zorg dat de sensor aan de zelfde nummers van SD en SC zijn aangesloten
5. Sluit de multiplexer aan op de Raspberry Pico W. De verbindingen zijn als volgt:
	1. Pico Pin 1 (SDA) -> Multiplexer SDA
	2. Pico Pin 2 (SCL) -> Multiplexer SCL
	3. Pico Pin 38 (GND) -> Blauwe lijn op breadboard
	4. Pico Pin 36 (3V3) -> Rode lijn op breadboard
6. Om de multiplexer van stroom te voorzien, sluit de Vin aan op de rode lijn van het breadboard en de GND op de blauwe lijn.
7. Voor een extra verduidelijking, raadpleeg het elektrisch schema
<div style="page-break-after: always"></div>

## [Gebruik](#) 
#### Dashboard opstarten  
1. Open een terminal/powershell in deze map: */Project5-6UrbanReef/website/urbanReef-angular/urbanReef*  
Dit kan gedaan worden met het command: ``cd /Project5-6UrbanReef/website/urbanReef-angular/urbanReef``  
2. voer dan het volgende command in de terminal/powershell: ``ng serve -o``  
3. De webapp is nu te bereiken via localhost:4200

#### Dashboard gebruiken
Voor een duidelijke uitleg van het gebruiken van het dashboard, zie: "demo dashboard.mp4"

#### Data inzien InfluxDB
1. Ga naar localhost:8086. Let op! Wanneer je dit draait op een server, moet je **localhost** veranderen naar **het ip van je server**
2. Login en ga naar Load data -> Buckets
3. Kies je aangemaakte Bucket
4. Kies bij From je Bucket, bij Filter -> measurements kies je sensor_data
5. Er verschijnt dan een box met field. Hierin kan je zien welke data velden er allemaal zijn en welke in Grafana gebruikt kunnen worden.
## [Onderhoud](#)
Het programma werkt naar behoren, maar er is een risico dat er een bug/probleem kan ontstaan. Hier is een lijst met veel voorkomende bugs/problemen en hoe deze op te lossen:
1. De gebruiker kan niet inloggen
	1. Controleer of de API en de MySQL database draaien.
	2. Herstart de API en de MySQL server door in het mapje met het docker-compose.yml bestand een terminal te openen, en het commando ```docker compose restart``` uit te voeren
	3. Controleer het wachtwoord.
	4. Kijk in de console van je webbrowser. Dit kan door rechter muis knop te klikken in je webbrowser, kies inspect elements, en zoek naar de knop: console. Deze stap is voor iedere browser anders. Nadat je de console hebt gevonden, kijk of er een fout melding staat en zo ja welke. Herhaal aan de hand hiervan de vorige stappen.
2. De reefs worden niet geladen
	1. Controleer of de API en de MySQL database draaien.
	2. Controleer of er Reefs aanwezig zijn in de MySQL database. Dit kan gedaan worden door de stappen van de MySQL installatie te volgen maar als code het volgende te gebruiken:
```SQL  
    use db;  
    select * from reefs; 
``` 
3. De data wordt niet weer gegeven
	1. Controleer of Grafana en InfluxDB draaien
	2. Controleer in Grafana of daar error staan
	3. Controleer of er data aanwezig is in de InfluxDB Bucket
4. De data wordt niet opgeslagen in de InfluxDB Bucket
	1. Controleer of de Raspberry Pico W is aangesloten
	2. Controleer of het lampje op de SHT40 sensoren branden
	3. Sluit de Raspberry Pico W en open de Mu Editor. Kies Load en selecteer de code.py in de folder van de Raspberry Pico W. Klik op de knop Serial en controleer of er geen fout meldingen zijn
	4. Controleer of de API aan staat en of daar geen fout meldingen op zijn
5. Er kan geen nieuwe reef aangemaakt worden
	1. Controleer of MySQL draait
	2. Controleer of de API draait en of er fout meldingen zijn