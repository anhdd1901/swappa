const  initialState = [
    {
        name:'Verizon',
        image:'https://static.swappa.com/static/images/carrier/verizon_btn.svg'
    },
    {
        name:'AT&T',
        image:'https://static.swappa.com/static/images/carrier/att_btn.svg'
    },
    {
        name:'T-Mobile',
        image:'https://static.swappa.com/static/images/carrier/tmobile_btn.svg'
    },
    {
        name:'Sprint',
        image:'https://static.swappa.com/static/images/carrier/sprint_btn.svg'
    },
    {
        name:'Unlocked',
        image:'https://static.swappa.com/static/images/carrier/unlocked_btn.svg'
    },
]

export default function sponsorList (state = initialState , action) {
      switch (action.type) {
        default:
          return state;
      }
    }