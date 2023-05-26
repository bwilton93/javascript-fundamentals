const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  it('initialises with a temperature of 20 degrees', () => {
    const thermostat = new Thermostat;
    expect(thermostat.temperature).toBe(20);
  })

  it('temperature can be increased using up method', () => {
    const thermostat = new Thermostat;
    thermostat.up();
    expect(thermostat.temperature).toBe(21);
  })
  
  it('temperature can be decreased using down method', () => {
    const thermostat = new Thermostat;
    thermostat.down();
    expect(thermostat.temperature).toBe(19);
  })
})
