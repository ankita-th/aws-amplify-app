import { DataStore } from '@aws-amplify/datastore';
import { Post } from './models';


await DataStore.save(
    new Post({
		"title": "Lorem ipsum dolor sit amet",
		"comments": [],
		"content": "Lorem ipsum dolor sit amet"
	})
);


/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
//  await DataStore.save(Post.copyOf(CURRENT_ITEM, item => {
//     // Update the values on {item} variable to update DataStore entry
// }));

// const modelToDelete = await DataStore.query(Post, 123456789);
// DataStore.delete(modelToDelete);

// const models = await DataStore.query(Post);
// console.log(models);