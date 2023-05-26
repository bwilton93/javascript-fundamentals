const Thermostat = require('./thermostat')

describe('Thermostat', () => {
  const thermostat = new Thermostat;

  it('initialises with a temperature of 20 degrees', () => {
    expect(thermostat.temperature).toBe(20);
  })

  it('temperature can be increased using up method', () => {
    thermostat.up();
    expect(thermostat.temperature).toBe(21);
  })
})
