<template>
  <NuxtLayout>
    <h1>DaData</h1>

    <div>
      <input type="text"
        v-model="inputValue"
        v-on:input="onInput"
      >

      <select
        v-model="selectValue"
        v-on:change="onSelect"
      >
        <option
          v-for="( option, index ) of options"
          v-bind:value="option"
          v-bind:key="index"
        >
          <span>{{ option.value }}</span>
        </option>
      </select>

      <button type="button" v-bind:disabled="disabled">Отправить</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const refresh = async value => {
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
    const token = '615f5e537d8b3b2be95d8ef413fc0e4a82bd60fb'
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${ token }`
      },
      body: JSON.stringify( { query: value } )
    }

    const response = await fetch( url, options )
    const data = await response.json()
    return data
  }
  
  const inputValue = ref( '' )
  const selectValue = ref( null )

  const options = ref( [] )
  const onInput = async event => {
    const value = event.target.value
    const data = await refresh( value )
    options.value = data.suggestions
  }

  const onSelect = () => {
    inputValue.value = selectValue.value.value
  }

  watch( options, () => {
    selectValue.value = null
  } )

  const disabled = computed( () => !( selectValue.value ) )
</script>