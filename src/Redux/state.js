import { rerenderEntireTree } from '../render';

const state = {
	profile: {
		dialogs: [
				{
					id: 1,
					name: "Сергей",
				},
				{
					id: 2,
					name: "Иван",
				},
				{
					id: 3,
					name: "Виктор",
				},
				{
					id: 4,
					name: "Люда",
				},
				{
					id: 5,
					name: "Djohn",
				}
			],
			posts: [
			    {
			      id: 1,
			      msg: "Пост 1",
			      likesCount: 1,
			    },
			    {
			      id: 2,
			      msg: "Пост 2",
			      likesCount: 10,
			    },
			    {
			      id: 3,
			      msg: "Пост 3",
			      likesCount: 2,
			    },
			    {
			      id: 4,
			      msg: "Пост 4",
			      likesCount: 3,
			    }
			],
			textFieldVal: "Введите текст..."
		
	},
	dialogs: {
		messages: [
			{
				id: 1,
				msg: "Привет!",
			},
			{
				id: 2,
				msg: "Ваня!",
			},
			{
				id: 3,
				msg: "Как дела?",
			},
			{
				id: 4,
				msg: "Всем хай!",
			},
			{
				id: 5,
				msg: "Hi!",
			}
		],
	}
	
};

export const addPost = () => {
	const newPost = {
		id: 5,
		msg: state.profile.textFieldVal,
		likesCount: 1,
	}
	state.profile.posts.push(newPost);
	state.profile.textFieldVal = '';
	rerenderEntireTree(state);
};

export const updateTextFieldVal = (text) => {
	state.profile.textFieldVal = text;
	rerenderEntireTree(state);
};

export default state;