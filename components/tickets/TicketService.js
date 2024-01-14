export const useTicketByIdColumns = (ticket) => {
    return [
        {
            label: 'Автор',
            value: ticket.user_name
        },
        {
            label: 'ID Тикета',
            value: ticket.id
        },
        {
            label: 'Заголовок',
            value: ticket.title
        },
        {
            label: 'Cообщение',
            value: ticket.message
        },
        {
            label: 'Дата создания',
            value: ticket.created_date
        }
    ]
}

export const useTicketColumns = [
        {
            name: 'author',
            required: true,
            label: 'Автор',
            align: 'left',
            field: row => row.user_name,
            format: val => `${val}`,
            sortable: true
        },
        {
            name: 'id',
            required: true,
            label: 'ID Тикета',
            align: 'left',
            field: row => row.id,
            format: val => `${val}`,
            sortable: true
        },
        {
            name: 'head',
            required: true,
            label: 'Заголовок',
            align: 'left',
            field: row => row.title,
            format: val => `${val}`,
            sortable: true
        },
        {
            name: 'message',
            required: true,
            label: 'Cообщение',
            align: 'left',
            field: row => row.message,
            format: val => `${val}`,
            sortable: true
        },
        {
            name: 'created_date',
            required: true,
            label: 'Дата создания',
            align: 'left',
            field: row => row.created_date,
            format: val => `${val}`,
            sortable: true
        },
    ]
