import EventShow from '@/views/EventShow'
import { shallowMount } from '@vue/test-utils'
import { events } from './dbTest.json'

const mockData = { event: events[0] }

describe('EventShow', () => {
  test('it should mounts component with props', () => {
    const wrapper = shallowMount(EventShow, {
      propsData: mockData
    })
    expect(wrapper.vm.$props).toMatchObject(mockData)
  })
})
