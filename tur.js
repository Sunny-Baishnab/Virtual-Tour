AFRAME.registerComponent('tour',{
    init:function(){
        this.placesContainer = this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnailsRef = [
            {
                id:'tajMahal',
                title:'Taj Mahal',
                url:'./assets/tajmahal.jpg'
            },
            {
                id:'hawamahal',
                title:'Hawa Mahal',
                url:'./assets/hawamahal.jpg'
            },
            {
                id:'goldenpagoda',
                title:'Golden Pagoda',
                url:'./assets/goldenPagoda.jpg'
            },
            {
                id:'kaziranga',
                title:'Kaziranga National Park',
                url:'./assets/kaziranga.jpg'
            }
        ]

        let previousXPosition = -60

        for(var i in thumbnailsRef){
            const posX = previousXPosition+30;
            const posY = 8;
            const posZ = -40;
            const pos = {x:posX,y:posY,z:posZ}
            previousXPosition = posX
            const borderEl = this.createBorder(pos,i.id)
            const thumbnail = this.createThumbnail(i)
            borderEl.appendChild(thumbnail)
            const TitleEl = this.createTitleEl(pos,i)
            borderEl.appendChild(TitleEl)
            this.placesContainer.appendChild(borderEl)
        }
    },
    createBorder:function(pos,id){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('id',id)
        entityEl.setAttribute('position',pos)
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
            primitive:'ring',
            radiusInner:9,
            radiusOuter:10
        })
        entityEl.setAttribute('material',{
            color:'yellow',
            opacity:1
        })
        return entityEl 
    },
    createThumbnail:function(item){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
            primitive:'circle',
            radius:9
        })
        entityEl.setAttribute('material',{
            src:item.url
        })
        return entityEl
    },
    createTitleEl:function(pos,item){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('text',{
            font:'dejavu',
            align:'center',
            color:'black',
            width:60,
            value:item.title,
        })
        const elPos = pos
        elPos.y = 0
        entityEl.setAttribute('position',elPos)
        entityEl.setAttribute('visible',true)
        return entityEl
    }
})