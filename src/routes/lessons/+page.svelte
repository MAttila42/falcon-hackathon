<script lang='ts'>
  import * as Table from '$lib/components/ui/table/index'

  const lessons = [
    {
      word: 'abase',
      mastery: '1',
      created: '2021-10-01',
    },
    {
      word: 'abash',
      mastery: '2',
      created: '2021-10-02',
    },
    {
      word: 'abate',
      mastery: '3',
      created: '2021-10-03',
    },
    {
      word: 'abdicate',
      mastery: '4',
      created: '2021-10-04',
    },
    {
      word: 'aberration',
      mastery: '5',
      created: '2021-10-05',
    },
  ]
</script>

<Table.Root class='m-a w-2/3'>
  <Table.Header>
    <Table.Row>
      <Table.Head>Word</Table.Head>
      <Table.Head>Mastery</Table.Head>
      <Table.Head>Created</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {#each lessons as lesson, i (i)}
      <Table.Row>
        <Table.Cell class='font-medium'>{lesson.word}</Table.Cell>
        <Table.Cell>{lesson.mastery}</Table.Cell>
        <Table.Cell>{lesson.created}</Table.Cell>
      </Table.Row>
    {/each}
  </Table.Body>
</Table.Root>
