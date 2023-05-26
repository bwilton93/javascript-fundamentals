class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = true;
  }

  togglePowerSaving() {
    this.powerSaving = !this.powerSaving;
  }

  up() {
    this.temperature += 1;
  }

  down() {
    this.temperature -= 1;
    if (this.temperature < 10) {
      this.temperature = 10;
    }
  }
}

module.exports = Thermostat;
