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
    if (this.powerSaving && this.temperature > 25) {
      this.temperature = 25;
    } else if (this.temperature > 32) {
      this.temperature = 32;
    }
  }

  down() {
    this.temperature -= 1;
    if (this.temperature < 10) {
      this.temperature = 10;
    }
  }

  reset() {
    this.temperature = 20;
  }

  energyUsage() {
    if (this.temperature <= 18) {
      return 'low-usage';
    } else if (this.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}

module.exports = Thermostat;
