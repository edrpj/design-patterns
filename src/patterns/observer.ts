interface Subject {
    registerObserver: (o: Observer) => void;
    removeObserver: (o: Observer) => void;
    notifyObservers: () => void;
}

interface Observer {
    update: (temperature: number) => void;
}

export class WeatherStation implements Subject {
    private temperature: number;
    private observers: Observer[] = [];

    setTemperature(temp: number) {
        console.log(`WeatherStation: new temperature measurement: ${temp}`);
        this.temperature = temp;
        this.notifyObservers();
    }

    public registerObserver(o: Observer) {
        this.observers.push(o);
    }

    public removeObserver(o: Observer) {
        const index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    public notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }
}

export class TemperatureDisplay implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    public update(temperature: number) {
        console.log('TemperatureDisplay: I need to update my display');
        console.log(this.subject)
        // logic
    }
}

export class Fan implements Observer {
    private subject: Subject;

    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }

    public update(temperature: number) {
        if (temperature > 25) {
            console.log('Fan: its hot there, turning myself on...');
            //here some real logic
        } else {
            console.log('Fan: its nice and cool, turning myself off...')
            //here some real logic
        }
    }
}