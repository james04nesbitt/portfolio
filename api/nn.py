import numpy as np
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, OneHotEncoder

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)



def main():
    # Load the digits dataset
    digits = load_digits()
    X = digits.data
    y = digits.target

    # Normalize the input data
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # One-hot encode the labels
    encoder = OneHotEncoder(sparse_output=False)
    y_onehot = encoder.fit_transform(y.reshape(-1, 1))

    # Split the data into training and test sets
    X_train, X_test, y_train, y_test = train_test_split(X_scaled, y_onehot, test_size=0.2, random_state=42)


    print("Enter number of hidden Layers(Default = 1):")
    hidden_layers = input()
    hidden_layers = 1 if not hidden_layers else int(hidden_layers)
    neurons = []
    for i in range(hidden_layers):
        print(f"Number of  neurons in hidden layer: {i+1}, (default = 10)")
        n = input()
        n = 10 if not n else int(n)
        neurons.append(n)

    neurons.append()
    weights = [weights.append(np.random.normal(0,1,[X_train.shape[1],neurons[0]]))]
    biases = [np.zeros((1,neurons[0]))]
    
    for _ in range(hidden_layers):


        

    


if __name__ == "__main__":
    main()