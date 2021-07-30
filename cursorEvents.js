AFRAME.registerComponent('event-cursor',{
    schema:{
        selectedItemsId:{default:'',type:'string'}
    },
    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
    },
    handlePlacesListState:function(){
        const id = this.el.getAttribute('id')
        const placesId = ['tajMahal','hawamahal','goldenpagoda','kaziranga']
        if(placesId.includes(id)){
            const placesContainer = document.querySelector('#placesContainer')
            placesContainer.setAttribute('event-cursor',{
                selectedItemsId:id
            })
            this.el.setAttribute('material',{color:'blue',opacity:1})
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener('mouseenter',()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener('mouseleave',()=>{
            const {selectedItemsId} = this.data
            if(selectedItemsId){
                const element = document.querySelector(`#${selectedItemsId}`)
                const id = element.getAttribute('id')
                if(id == selectedItemsId){
                    element.setAttribute('material',{
                        color:'yellow',opacity:1
                    })
                }
            }
        })
    }
})