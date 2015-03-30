Template.listEdit.events({
    'click .cancel-edit-list':function(evt, tmpl){
        Router.go('task', this);
    },
    
    'click .save-list':function(evt, tmpl){
        var name = $('#name').val();                    // name input box value
        var description = $('#description').val();      // description input box value
        var date = $('#datepicker').val();              // date input box value
        var currentListID = this._id;
        var shortDescription;

        if (description.length > 30 ){
            shortDescription = description.substring(0,30) + '...';
        } else{
            shortDescription = description;
        }        
        
        var updatedList = {
            url: name,
            title: name,
            description: description,
            shortDescription: shortDescription,
            date: date
        }
        
        List.update(currentListID, {$set: updatedList}, function(error) {
            if(error) {
                console.log('Error');  
            }
            else {
                Router.go('task', {_id: currentListID});   
            }
        });
    }
});


Template.listEdit.helpers({
    task: function() {
        return List.find({postId:this._id});
    }
});