import EventCard from '@/components/EventCard'
import { shallowMount } from '@vue/test-utils'
import { events } from './dbTest.json'

const mockData = { event: events[0] }

describe('EventCard', () => {
  test('it should mounts component with props', () => {
    const wrapper = shallowMount(EventCard, {
      propsData: mockData
    })
    expect(wrapper.vm.$props).toMatchObject(mockData)
  })
})
